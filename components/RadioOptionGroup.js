/**
 * Created by VD on 12/28/2015.
 */
var RadioOptionGroup = React.createClass({
    getInitialState: function(){
        return {};
    },
    propTypes: {
        name: React.PropTypes.string.isRequired,
        other:React.PropTypes.bool,
        options:React.PropTypes.array.isRequired
    },
    onChange: function(evt){
        this.setState({
            selected: evt.target.value
        });
    },
    render: function(){
        var name = this.props.name;
        return (
            <div onChange={this.onChange}>
                {this.props.options.map(function(child) {
                    return(
                        <RadioOption name={name}
                                     value={child.value}>
                            {child.label}
                        </RadioOption>
                    )
                })}

                {this.props.other && <RadioOtherOption
                    name={name}
                    selection={this.state.selected}/> }
            </div>


        )
    }
})