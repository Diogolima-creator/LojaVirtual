import * as C from './styles';

export const InputReg = ( { title1,title2,metade,id1,id2,type,type2,min1,min2,max1,max2,required,placeholder1,placeholder2,Val}) => {

    if (type === ''){
        type = 'text';
    }
    if (type2 === ''){
        type2 = 'text';
    }
    return(
        <C.Container>
            {metade === false && 
            <div className="inputflex">
                <div className="inputblock">
                    <p>{title1}</p>
                    <input id={id1} required={required} type={type} placeholder={placeholder1}></input>
                </div>
            </div>
            }
            {metade === true && 
            <div className="inputflexmetade">
                <div className="inputmetadeflex">
                    <div className="inputmetadeblock">
                        <p>{title1}</p>
                        {Val !== '' &&                    
                        <input id={id1} required={required} type={type} minLength={min1} maxLength={max1} placeholder={placeholder1} defaultValue={placeholder1} readOnly></input>
                        }
                        {Val === '' &&                    
                        <input id={id1} required={required} type={type} minLength={min1} maxLength={max1} placeholder={placeholder1} defaultValue={placeholder1} ></input>
                        }    
                    </div >
                </div>
                <div className="inputmetadeflex">
                    <div className="inputmetadeblock">
                        <p>{title2}</p>
                        <input id={id2} required={required} type={type2} minLength={min2} maxLength={max2} placeholder={placeholder2} defaultValue={placeholder2}></input>
                    </div>
                </div>
            </div>
            }
        </C.Container>
    );
}