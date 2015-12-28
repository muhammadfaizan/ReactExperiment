/**
 * Created by VD on 12/28/2015.
 */
var RadioOption = React.createClass({
    propTypes: {
        value: React.PropTypes.string.isRequired,
        children: React.PropTypes.node,
        name: React.PropTypes.string.isRequired
    },
    render: function(){
        return (
            <p className="radio">
            <label>
                <input type="radio" name={this.props.name}
                       value={this.props.value}/>
                {this.props.children}
            </label>
        </p>
        )
    }
})