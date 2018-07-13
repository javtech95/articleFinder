$(document).ready(function () {
    const articleContainer = $('.article-container');
    $(document).on('click', '.btn.save', handleArticleSave);
    $(document).on('click','.scrape-new', handleArticleScrape);

    initPage()

    function initPage() {
        articleContainer.empty();
        $.get('/api/headlines?saved=false')
            .then(function (data) {
                if(data && data.lenght){
                    renderArticles(data);
                }
                else{
                    renderEmpty();
                }
            });
    }
    function renderArticles(articles){
        const articlePanels = [];
        for(const i = 0< articles.length; i++){
            articlePanels.push(createPanels(articles[i]));
        }
        articleContainer.append(articlePanel);
    }
    function createPanel(article) {
        const panel =
            $(["<div class ='panel panel-default'>",
                "<div class= 'panel-heading'>",
                "<h3>",
                article.headline,
                "<a class='btn btn-success save'>",
                "Save Article",
                "</a>",
                "</h3>",
                "</div>",
                "<div class='panel-body'>",
                article.summary,
                "</div>",
                "</div>"

            ].join(""));
        panel.data('_id', article._id);
        return panel;
    }
    function renderEmpty() {
        const emptyAlert =
            $(["<div class = 'alert alert-warning text-center'>",
                "<h4 class='Uh oh, no new articles'>",
                "</div>",
                "<div class='panel panel-default'>",
                "<div class='panel-heading text-center'>",
                "<h3> What do you wanna do</h3>",
                "</div>",
                "<div class='panel-body text-center'>",
                "<h4><a class='scrape-new'>Try Scraping new stuff</a></h4>",
                "<h4><a href='/saved'>Go to Saved Articles</a></h4> ",
                "</div>",
                "</div>"

            ].join(""));
        articleContainer.append(emptyAlert);
    }
    function handleArticleSave() {
        const articleToSave = $(this).parent(".panel").data();
        articleToSave.saved = true;
return panel;
    }
    function render() {
        
    }
});