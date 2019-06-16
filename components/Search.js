var GIPHY_PUB_KEY = '97lNS7NRHuxCsFFGzS1nbfFOlH3dM0zR';
var GIPHY_API_URL = 'https://api.giphy.com';

Search = React.createClass({
    getInitialState() {
        return {
            searchingText: ''
        };
    },

    getGif: function(searchingText, callback) {  
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
        var xhr = new XMLHttpRequest();  
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
               var data = JSON.parse(xhr.responseText).data; 
                var gif = {  
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                };
                callback(gif); 
            }
        };
        xhr.send();
    },

    handleChange: function(event) {
        var searchingText = event.target.value;
        this.setState({searchingText: searchingText});
    
        if (searchingText.length > 2) {
          this.props.onSearch(searchingText);
        }
    },
    
    handleKeyUp: function(event) {
        if (event.keyCode === 13) {
          this.props.onSearch(this.state.searchingText);
        }
    },
    
    handleSearch: function(searchingText) {  
        this.setState({
            loading: true  
        });
        this.getGif(searchingText, function(gif) { 
            this.setState({ 
                loading: false, 
                gif: gif,  
                searchingText: searchingText 
            });
        }.bind(this));
    },

    render: function() {
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px'
        };

        return (
            <input
                type="text"
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                placeholder="Tutaj wpisz wyszukiwaną frazę"
                style={styles}
                value={this.state.searchTerm}
            />
        )
    }
});