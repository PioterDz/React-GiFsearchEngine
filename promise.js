

getGif: function(searchingText) {
    let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
    return new Promise(
        function(resolve, reject) {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.onload = function() {
                if (request.status === 200) {
                    var data = JSON.parse(request.responseText).data; 
                    var gif = {  
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    resolve(gif);
                } else {
                    reject(new Error(request.statusText));
                }
            };
            request.onerror = function() {
                reject(new Error(
                   `XMLHttpRequest Error: ${request.statusText}`));
            };
            request.send();
        }
    );
}

getGif(searchingText)
.then(this.response => this.response.json())
.then((this.response) => {
    let data = this.response.data; 
    let gif = {  
        url: data.fixed_width_downsampled_url,
        sourceUrl: data.url
    })
.catch(err => console.error(err));






// getGif: return new Promise(
//     function(resolve, reject) {
//         let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
//         fetch(url)
//             .then(response => response.json())

//             let data = response.data;
//             let gif = {
//                 url: response.data.fixed_width_downsampled_url,
//                 sourceUrl: response.data.url
//             };

// });


// getGif: 
//     function(searchingText, callback) {  
//         var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
//         var xhr = new XMLHttpRequest();  
//         xhr.open('GET', url);
//         xhr.onload = function() {
//             if (xhr.status === 200) {
//                 var data = JSON.parse(xhr.responseText).data; 
//                 var gif = {  
//                     url: data.fixed_width_downsampled_url,
//                     sourceUrl: data.url
//                 };
//                 callback(gif); 
//             }
//         };
//         xhr.send();
//     }
// )


// getGif: function(url)
//     return new Promise(
//         function(resolve, reject) {
//             const request = new XMLHttpRequest();
//             request.onload = function() {
//                 if (this.status === 200) {
//                     resolve(this.response); // Sukces
//                 } else {
//                     reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
//                 }
//             };
//             request.onerror = function() {
//                 reject(new Error(
//                    `XMLHttpRequest Error: ${this.statusText}`));
//             };
//             request.open('GET', url);
//             request.send();
//         });


// function (searchingText, callback) {
//     return new Promise(function (resolve, reject) {
//         let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; 
//         const xhr = new XMLHttpRequest();  
                
//         xhr.open('GET', url);
//         xhr.onload = function() {
//             resolve(resp)
//             if (xhr.status === 200) {
//                 let data = JSON.parse(xhr.responseText).data; 
//                 let gif = {  
//                     url: data.fixed_width_downsampled_url,
//                     sourceUrl: data.url
//                 };
//                 callback(gif); 
//         };
//         xhr.onerror = function() {
//             reject(new Error('Connection problem'));
//         }

//         xhr.send();
//     });
// }