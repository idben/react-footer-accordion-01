import './Footer.sass';
import { data } from './fakeData';
import { useState } from 'react';

function Footer() {
  const [displayCheck, setDisplayCheck] = useState(()=>{
    let ary = [];
    data.forEach(()=>{
      ary.push(false);
    });
    return ary;
  });


  function onItemClick(index){
    let ary = displayCheck.map(()=>(false));
    ary[index] = !displayCheck[index];
    setDisplayCheck(ary);
  }

  return (
    <div className="Footer">
      <ul className="ul1">
        {data && data.map((item, index)=>(
          <li className="li1" key={"item"+index}>
            <div className="li1Text" onClick={(e)=>{ onItemClick(index)}}>{item.text}</div>
            <ul className={(displayCheck[index]===true)?"ul2 ul2Show":"ul2"}>
              {item.options && item.options.map((option, index2)=>(
                <li className="li2" key={"option"+index2}>
                  <a href={item.links[index2]} target="_blank" rel="noreferrer">{option}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
