/**
 * Created by VD on 12/28/2015.
 */
var RadioOption = React.createClass({

    render: function(){
        return (
            <p className="radio">
            <label>
                <input type="radio" name="referrer" value={this.props.value}/>
                {this.props.children}
            </label>
        </p>
        )
    }
})