// Small code-native illustrations give modern clothes more specific visual clues than shared emoji.
export function Garment({kind,small=false}:{kind:string;small?:boolean}){
 const isPants=['cargo trousers','leggings','wide-leg jeans','joggers','bike shorts'].includes(kind);
 const isHoodie=kind==='a hoodie';
 const isPuffer=kind==='a puffer jacket';
 const isCrop=kind==='a crop top';
 const isBra=kind==='a sports bra';
 const isSkirt=kind==='a skirt';
 if(!isPants&&!isHoodie&&!isPuffer&&!isCrop&&!isBra&&!isSkirt)return null;
 const colour=isHoodie?'#90acd0':kind==='cargo trousers'?'#9ca87b':kind==='leggings'?'#69637f':kind==='wide-leg jeans'?'#6f9fc0':kind==='joggers'?'#afb2b6':isPuffer?'#c4a6c9':isCrop?'#db999b':isBra?'#a0b49c':'#c3a0c9';
 return <svg className={`garment ${small?'small':''}`} viewBox="0 0 120 130" aria-hidden="true" fill="none" stroke="#343f45" strokeWidth="1.6" strokeLinejoin="round">
  {isPants?<><path d={kind==='bike shorts'?'M31 15h58l10 76-34 3-5-43-5 43-34-3Z':kind==='wide-leg jeans'?'M29 10h62l14 111H66L60 48l-6 73H15Z':'M30 10h60l8 108-30 3-8-76-8 76-30-3Z'} fill={colour}/><path d="M31 18h58M60 18v24M37 20q0 16-9 17M83 20q0 16 9 17" opacity=".55"/>{kind==='cargo trousers'&&<><path d="M25 55h23v24H23Zm47 0h23l2 24H73Z" fill="#adb98d"/><path d="M25 61h23m24 0h23"/></>}{kind==='joggers'&&<path d="M32 111h19m17 0h19M55 17l-4 17m14-17 4 17" stroke="#52595a"/>}</>:isSkirt?<><path d="M38 21h44l25 92q-47 13-94 0Z" fill={colour}/><path d="M37 31h47M48 33l-9 82M62 33v87M75 33l11 81" opacity=".55"/></>:isBra?<><path d="M35 18h12l4 23h18l4-23h12l4 56-12 22H43L31 74Z" fill={colour}/><path d="M33 71q27 14 54 0M42 85h36" opacity=".5"/></>:<>
  {isHoodie&&<path d="M39 35V25Q42 4 60 5q18-1 21 20v10" fill="#7896bf"/>}
  <path d={isCrop?'M37 26l-24 15 9 25 16-7v34h44V59l16 7 9-25-24-15q-23 14-46 0Z':'M37 30 19 40 7 99l18 6 13-39v53h44V66l13 39 18-6-12-59-18-10q-23 13-46 0Z'} fill={colour}/>
  {isHoodie?<><path d="M39 29q21 18 42 0l-9-13H48Z" fill="#b4c8df"/><path d="M53 39v22m14-22v19" strokeWidth="2"/><path d="M46 80h28l5 24H41Z" fill="#a5bdd8"/><path d="M38 111h44M9 91l18 6m66 0 18-6" opacity=".6"/></>:isPuffer?<><path d="M43 30V17q17-9 34 0v13M60 32v87"/><path d="M38 49h44M38 68h44M38 88h44M38 106h44M16 56l19 5M12 75l17 5m57-19 18-5M91 80l17-5" opacity=".65"/></>:<path d="M44 30q16 22 32 0M38 85h44" opacity=".5"/>}
  </>}
 </svg>;
}
