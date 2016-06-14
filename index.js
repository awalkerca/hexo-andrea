
hexo.extend.tag.register('andrea', function(args, content){

  var blog_url = 'http://www.andreamcgrath.com';
  var default_reference = 'Andrea';
  var reference = args[0] || default_reference;
  
  return `<a class='w-ref' href='${blog_url}'>${reference}</a>`;
});
