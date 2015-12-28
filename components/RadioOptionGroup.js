/**
 * Created by VD on 12/28/2015.
 */
var RadioOptionGroup = React.createClass({
    getInitialState: function(){
        return {};
    },
    onChange: function(evt){
        console.log(evt.target);
        this.setState({
            selected: evt.target.value
        });
    },
    render: function(){
        return (
            <div onChange={this.onChange}>
                {this.props.options.map(function(child) {
                    return(
                        <RadioOption value={child.value}>
                            {child.label}
                        </RadioOption>
                    )
                })}

                {this.props.other && <RadioOtherOption selection={this.state.selected}/> }
            </div>


        )
    }
})