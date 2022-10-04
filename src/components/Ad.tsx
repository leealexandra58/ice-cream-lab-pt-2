
import './Ad.css';

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}


export default function Ad({ flavor, fontSize, darkTheme }: Props) {
    
    let addClass = "";
    if (darkTheme === true) {
        addClass = "-dark-theme";
    }

    const styles = {
        fontSize: fontSize + "px"
    };

    return (
        <div className={"ad-box" + addClass} style={styles}>
            <p>Vote for</p>
            <p className="flavor-font">{flavor}</p>
        </div>
    )
}
