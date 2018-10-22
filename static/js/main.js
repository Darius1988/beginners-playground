$(document).ready(function () {
    appLesson1.draw();
});

appLesson1 = {
    draw: function() {
        $('#page-frame').removeClass('hidden');

        appLesson1.drawHeader();
        appLesson1.drawSlogan();
        appLesson1.drawFooter();
        appLesson1.initNews();
    },
    drawHeader: function() {
        var headerTemplate = Handlebars.compile($("#ht-header").html());
        var generatedTemplate = headerTemplate();
        $('.header').append(generatedTemplate);
    },
    drawSlogan: function() {
        var sloganTemplate = Handlebars.compile($("#ht-slogan").html());
        var generatedTemplate = sloganTemplate();
        $('.slogan').append(generatedTemplate);
    },
    initNews: function() {
        $.ajax({
            type: "GET",
            dataType:'json',
            url: 'https://jsonplaceholder.typicode.com/posts',
            success: appLesson1.drawNews
        });
    },
    drawNews: function (data) {
        var newsTemplate = Handlebars.compile($("#ht-new-list").html());
        var generatedTemplate = newsTemplate({'list': data});
        $('.area-new-list').append(generatedTemplate);
        console.log(data);
    },
    drawFooter: function() {
        var tmpl = Handlebars.compile($("#ht-footer").html());
        var genTmpl = tmpl();
        $('.footer').append(genTmpl);
    }
};
