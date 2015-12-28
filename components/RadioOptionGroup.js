/**
 * Created by VD on 12/28/2015.
 */
var RadioOption = React.createClass({

    render: function(){
        return (
            <div>
                {this.props.option.map(function(child) {
                    <RadioOption value={child.value}>
                        {child.label}
                    </RadioOption>
                })}
            </div>

        )
    }
})