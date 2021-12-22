const StatisticLine = ({text,value}) =>{
    console.log('stat line render',{text,value})
    return(
      
                <tr>
                    <td>{text}</td>
                    <td>{value}</td>
                </tr>

    )
  
}

export default StatisticLine;   