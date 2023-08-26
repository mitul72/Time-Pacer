import Table from 'react-bootstrap/Table';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Dropdown({}) {
  const d = new Date();
  const days = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
  const displayDays = [];
  for(let key in days){
    if(key===d.getDay().toString()){
      displayDays.push(<option selected value={key}>{days[parseInt(key) as keyof typeof days]}</option>);
    }
    else
    displayDays.push(<option value={key}>{days[parseInt(key) as keyof typeof days]}</option>);
  }
  return (
    <div className='select-container'>
        <select className='dropdown'>
          {displayDays}
        </select>
        <FontAwesomeIcon className='down-icon' icon={faCaretDown}/>
    </div>
  )
}
