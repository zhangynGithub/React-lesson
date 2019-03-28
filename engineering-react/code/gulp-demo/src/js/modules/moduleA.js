module.exports = function(cb){
    $.get('/api/albums/pics/71347a8bfbea4f109a5c5de88934fa47',function(res){
        cb(res)
    })
    // alert(33333)
}