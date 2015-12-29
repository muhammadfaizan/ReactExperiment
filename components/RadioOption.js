/**
 * Created by VD on 12/28/2015.
 */

function RadioOption(props){
    return (
        <p className="radio">
            <label>
                <input type="radio" name={props.name}
                       onClick={props.onCheck}
                       value={props.value}
                       checked={props.checked}
                    />
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