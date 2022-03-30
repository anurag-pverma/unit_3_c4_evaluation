async function apiCall(url) {


    //add api call logic here
 try {
    let res = await fetch(url);
    let articles = await res.json();
    return articles;
 } catch (error) {
     console.log('error', error);
 }


}


function appendArticles(articles, main) {

    //add append logic here
    main.innerHTML = null;
    
    

    articles.forEach(el=> {
        let left = document.createElement ("div")
        left.setAttribute("id", "left");

        let img = document.createElement("img");
        
        img.src = el.urlToImage;
        let title = document.createElement("p");
        title.setAttribute("id", "first");
        title.textContent = el.title;
        let author = document.createElement("p");
        author.setAttribute("id", "second");
        let content = document.createElement("p");
        content.setAttribute("id", "third");
        content.textContent = el.content;
        author.textContent = el.author;

        left.addEventListener("click", function () {
            sendLocal(el);
            window.location.href = "blog.html";
        });
        // second.append(content);
        left.append( title, author, content, img);
        main.append(left);
        
    });

    function sendLocal(el) {
        let data = [];
        data.push(el);
        localStorage.setItem("article", JSON.stringify(data));
    }

}

export { apiCall, appendArticles }