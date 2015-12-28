/**
 * Created by VD on 12/28/2015.
 */

function RadioOption(props){
    return (
        <p className="radio">
            <label>
                <input type="radio" name={props.name}
                       value={props.value}/>
                        {props.children}
            </label>
        </p>
    )
}

RadioOption.propTypes= {
    value: React.PropTypes.string.isRequired,
        children: React.PropTypes.node,
        name: React.PropTypes.string.isRequired
}