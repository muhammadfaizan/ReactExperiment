/**
 * Created by VD on 12/28/2015.
 */
function RadioOptionGroup(props) {
    var name = props.name;
    //var onCheck = this.props.onCheck;
    // <div onChange={this.onChange}>
    return (
        <div >
            {props.options.map(function (child) {

                function onCheck (){
                    props.onCheck(child.value);
                }
                if (child.value == 'other') {
                    return (
                        <RadioOtherOption
                            name={name}
                            key={child.value}
                            onCheck={onCheck}
                            checked={child.checked}
                            />
                    )
                }
                else {
                    return (
                        <RadioOption name={name}
                                     key={child.value}
                                     value={child.value}
                                     onCheck={onCheck}
                                     checked={child.checked}
                            >
                            {child.label}
                        </RadioOption>
                    )
                }

            })}

        </div>


    )
}
RadioOptionGroup.propTypes = {
    name: React.PropTypes.string.isRequired,
    other: React.PropTypes.bool,
    options: React.PropTypes.array.isRequired//,
}