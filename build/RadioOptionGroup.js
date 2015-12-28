/**
 * Created by VD on 12/28/2015.
 */
var RadioOptionGroup = React.createClass({displayName: "RadioOptionGroup",
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
            React.createElement("div", {onChange: this.onChange}, 
                this.props.options.map(function(child) {
                    return(
                        React.createElement(RadioOption, {name: name, 
                                     value: child.value}, 
                            child.label
                        )
                    )
                }), 

                this.props.other && React.createElement(RadioOtherOption, {
                    name: name, 
                    selection: this.state.selected})
            )


        )
    }
})