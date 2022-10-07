
$(function () {
    $('#btn').click(function () {
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link == null || link == "", content == null || content == "") {
            alert("Por favor preencha todos textos");
            return false;
        }

        let i = 0;
        $.post(link, { "content": content, "username": username, "avatar_url": avatar, });
    });
});

