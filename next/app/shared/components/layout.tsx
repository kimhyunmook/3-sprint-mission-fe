import { useState } from "react";

export default function Layout({ title, children, marginBottom }:{
  title?:string,
  children?:React.ReactNode,
  marginBottom?:string
}) {
  return (
    <div className="container" style={{ marginBottom }}>
      {!!title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
}

export interface LayoutInputType 
  {
    placeholder?: string;
    name?: string;
    id?: string;
    onchange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // 함수 타입으로 수정
    value?: string;
    errMsg?: string;
    condition?: boolean;
    title?: string;
    type?: string;
    onkeypress?: (event: React.KeyboardEvent<HTMLInputElement| HTMLTextAreaElement>) => void;
    maxLength?: number;
    children?: any;
  }


export function LayoutInput({
  placeholder,
  name,
  id,
  onchange,
  value,
  errMsg,
  condition,
  title,
  type,
  onkeypress,
  maxLength,
  children,
}:LayoutInputType) {
  const inputAtt = {
    placeholder,
    name,
    id,
    onChange: onchange,
    value,
    onBlur: () => {
      if (condition && !!condition) setTriger(true);
      else setTriger(false);
    },
    onFocus: () => setTriger(false),
    onKeyDown: !!onkeypress ? onkeypress : ()=>{},
  };
  const [triger, setTriger] = useState(false);
  return (
    <div className="inputBox">
      <label htmlFor={id}>{title}</label>
      {type === "textarea" ? (
        <div
          className="cover covertxt"
          style={{ border: triger ? "1px solid #f74747" : "" }}
        >
          <textarea
            // name={name}
            // onChange={onchange}
            // id={id}
            // value={value}
            // onBlur={()=>{
            //   if (condition && !!condition) setTriger(true);
            //   else setTriger(false);
            // }}
            // onFocus={()=>setTriger(false)}
            // onKeyDown={onkeypress}
            {...inputAtt}
            placeholder={placeholder}
            style={{ width: "100%", height: "282px" }}
          ></textarea>
          {triger ? <p className="errMsg">{errMsg}</p> : null}
        </div>
      ) : (
        <div
          className="cover"
          style={{ border: triger ? "1px solid #f74747" : "" }}
        >
          <input
            type="text"
            {...inputAtt}
            maxLength={maxLength ?? 10}
          />
          {triger ? <p className="errMsg">{errMsg}</p> : null}
        </div>
      )}
      {id === "tag" ? <div className="tagBox">{children}</div> : null}
    </div>
  );
}


export function TitleLine({ text, children }:{text?:string,children?:any}) {
  return (
    <div className="titleLine">
      <h2>{text}</h2>
      {children}
    </div>
  );
}

export function ImgBox({ src="/img/arr_left.svg", alt="", width, height }:{src:string,alt:string,width?:string,height?:string}) {
  const imgStyle = {
    width,
    height,
  };
  return (
    <div className="imgBox" style={imgStyle}>
      {/* <Image src={src} alt={alt} layout="fill"/> */}
      <img src={src} alt={alt} />
    </div>
  );
}
