from html.parser import HTMLParser
import json
class N:
 def __init__(self,t='',a=[]): self.t=t;self.a=dict(a);self.c=[]
class Raw:
 def __init__(self,s):self.s=s
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.root=N();self.stack=[self.root]
 def handle_starttag(self,t,a):
  n=N(t,a);self.stack[-1].c.append(n)
  if t not in ['img','input','br','hr','meta','link','source','wbr']:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].t==t:self.stack=self.stack[:i];break
 def handle_data(self,d):self.stack[-1].c.append(d)
def parse(s):
 p=Parser();p.feed(s);return p.root
def find(n,test):
 if not isinstance(n,N):return None
 if test(n):return n
 for c in n.c:
  r=find(c,test)
  if r:return r
attrs={'class':'className','tabindex':'tabIndex','for':'htmlFor','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','stroke-width':'strokeWidth','fill-rule':'fillRule','clip-rule':'clipRule','autocomplete':'autoComplete','maxlength':'maxLength','viewbox':'viewBox','fetchpriority':'fetchPriority','spellcheck':'spellCheck'}
def render(n):
 if isinstance(n,Raw):return n.s
 if isinstance(n,str):return '{'+json.dumps(n,ensure_ascii=False)+'}' if n else ''
 if n.t=='script':return ''
 a=n.a.copy();style=a.pop('style','');a.pop('data-nimg',None)
 if style and n.t=='img' and 'position:absolute' in style:a['class']=(a.get('class','')+' extracted-fill').strip()
 if style=='height:0px':a['class']=(a.get('class','')+' extracted-collapsed').strip()
 out=[]
 for k,v in a.items():
  k=attrs.get(k,k)
  if k in ['inert','hidden','required','multiple','disabled','open','checked','selected']:out.append(k+'={true}');continue
  if k=='tabIndex':out.append(k+'={'+v+'}');continue
  if k=='draggable':out.append(k+'={'+v+'}');continue
  out.append(k+'='+json.dumps(v or '',ensure_ascii=False))
 start='<'+n.t+(' '+' '.join(out) if out else '')
 if n.t in ['img','input','br','hr','source']:return start+' />'
 return start+'>'+''.join(render(c) for c in n.c)+'</'+n.t+'>'
def walk(n,depth=0):
 if not isinstance(n,N):return
 print(' '*depth,n.t,n.a.get('class',''),n.a.get('id',''))
 if depth<4:
  for c in n.c:walk(c,depth+1)
