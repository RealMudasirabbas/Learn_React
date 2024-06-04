export default function Clock({ time }) {
    let hours = time.getHours();
    let result = hours >= 0 && hours <= 6 ? (
        <div>
            <h1 className="night" >{time.toLocaleTimeString()}</h1>
        </div>
    ) : (
        <div>
            <h1 className="day">{time.toLocaleTimeString()}</h1>
        </div>
    )
    
    return (
        <div>
            {result}
        </div>
    )
}
