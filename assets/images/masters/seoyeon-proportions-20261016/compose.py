from pathlib import Path
from PIL import Image,ImageDraw,ImageFilter
import urllib.request,json,shutil,hashlib
import numpy as np
import cv2
root=Path('/home/user/cupid-seoyeon-proportions-20261016')
generated=root/'generated';delivery=root/'delivery'
generated.mkdir(exist_ok=True);delivery.mkdir(exist_ok=True)
urls={"seyoun_date_laugh":"https://d8j0ntlcm91z4.cloudfront.net/user_3FmH4KnEpNlYvd9ZuvDRc0jR2EM/hf_20261016_083146_9f49d062-7b14-4ed0-ab9e-ec68b2987706.png","seyoun_date_shy":"https://d8j0ntlcm91z4.cloudfront.net/user_3FmH4KnEpNlYvd9ZuvDRc0jR2EM/hf_20261016_083145_f6987d91-e6d4-4436-b8ea-ff7d4e19d265.png","seyoun_date_worried":"https://d8j0ntlcm91z4.cloudfront.net/user_3FmH4KnEpNlYvd9ZuvDRc0jR2EM/hf_20261016_083145_6fce3887-dfbb-4f0f-840b-439adbba4c0a.png","seyoun_date_sad":"https://d8j0ntlcm91z4.cloudfront.net/user_3FmH4KnEpNlYvd9ZuvDRc0jR2EM/hf_20261016_083146_94ac7cb1-0149-4706-876e-e636e70d8bc1.png","event_seoyeon_succulent":"https://d8j0ntlcm91z4.cloudfront.net/user_3FmH4KnEpNlYvd9ZuvDRc0jR2EM/hf_20261016_083146_9fcfc98b-8d7c-438f-8a33-c709d60e48ff.png"}
for name,url in urls.items():
 if not (generated/(name+'.png')).exists(): urllib.request.urlretrieve(url,generated/(name+'.png'))
shutil.copyfile(root/'base-final.png',generated/'seyoun_date_normal.png')
shutil.copyfile(root/'base-final.png',delivery/'seyoun_date_normal.png')
base=Image.open(root/'base-final.png').convert('RGBA')
mask=Image.new('L',base.size,0);draw=ImageDraw.Draw(mask)
# Eye regions stay strictly inside the original eyeglass lenses; frames remain untouched.
draw.polygon([(995,588),(1020,576),(1060,575),(1095,587),(1115,610),(1125,645),(1115,671),(1090,693),(1052,703),(1016,693),(985,673),(968,642),(976,617)],fill=255)
draw.polygon([(1213,505),(1230,490),(1270,478),(1310,475),(1340,479),(1350,500),(1354,530),(1345,566),(1322,592),(1286,611),(1246,606),(1219,583),(1209,552)],fill=255)
draw.polygon([(1195,428),(1230,410),(1270,401),(1305,397),(1315,406),(1270,424),(1235,439),(1205,450)],fill=255)
draw.polygon([(962,523),(990,505),(1025,490),(1048,491),(1052,503),(1016,519),(985,539),(962,544)],fill=255)
draw.ellipse((1140,677,1330,795),fill=255)
mask=mask.filter(ImageFilter.GaussianBlur(3))
mask.save(root/'expression-mask.png')
ba=np.array(base);ma=np.array(mask)
records=[]
for expr in ['laugh','shy','worried','sad']:
 name='seyoun_date_'+expr
 variant=Image.open(generated/(name+'.png')).convert('RGBA')
 assert variant.size==base.size
 # Register the unchanged bridge of the glasses before transferring features.
 template=cv2.cvtColor(ba,cv2.COLOR_RGBA2GRAY)[541:591,1110:1210]
 source_gray=cv2.cvtColor(np.array(variant),cv2.COLOR_RGBA2GRAY)
 search=source_gray[491:641,1060:1260]
 scores=cv2.matchTemplate(search,template,cv2.TM_CCOEFF_NORMED)
 _,score,_,loc=cv2.minMaxLoc(scores)
 dx=1110-(1060+loc[0]);dy=541-(491+loc[1])
 registered=cv2.warpAffine(np.array(variant),np.float32([[1,0,dx],[0,1,dy]]),base.size,flags=cv2.INTER_LINEAR,borderMode=cv2.BORDER_CONSTANT,borderValue=(0,0,0,0))
 variant=Image.fromarray(registered)
 final=Image.composite(variant,base,mask)
 final.putalpha(base.getchannel('A'))
 final.save(delivery/(name+'.png'))
 fa=np.array(final)
 outside=int(np.count_nonzero(np.any(fa!=ba,axis=2)&(ma==0)))
 below=int(np.count_nonzero(np.any(fa[900:]!=ba[900:],axis=2)))
 assert outside==0 and below==0
 records.append({'name':name,'dimensions':final.size,'outsideFacialFeatureMaskChangedPixels':outside,'belowFaceChangedPixels':below,'glassesBridgeRegistration':{'translation':[dx,dy],'score':round(score,6)},'alphaIdenticalToBase':bool(np.array_equal(fa[:,:,3],ba[:,:,3]))})
shutil.copyfile(generated/'event_seoyeon_succulent.png',delivery/'event_seoyeon_succulent.png')
(root/'expression-pixel-verification.json').write_text(json.dumps({'method':'Local facial feature compositing at native resolution; original alpha retained','maskBounds':mask.getbbox(),'maskBlurRadius':3,'records':records},indent=2))
# Review-only contact sheet, not a project master
sheet=Image.new('RGB',(1350,460),(228,224,218))
for i,expr in enumerate(['normal','laugh','shy','worried','sad']):
 im=Image.open(delivery/('seyoun_date_'+expr+'.png')).convert('RGBA').crop((885,350,1455,920))
 im.thumbnail((270,400),Image.Resampling.LANCZOS)
 sheet.paste(im,(i*270,25),im)
 ImageDraw.Draw(sheet).text((i*270+15,425),expr,fill=(20,20,20))
sheet.save(root/'expression-review.jpg',quality=93)
print(json.dumps(records))

