

export default{
    name:'works',
    title:'Works',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
          name:'projectLink',
          title:'ProjectLink',
          type:'string'
        },
        {
          name:'codeLink',
          title:'CodeLink',
          type:'string'
        },
        {
          name: 'tags',
          title: 'Tags',
         type:'array',
         of: [
           {
             name:'tag',
             title:'Tag', 
             type:'string'
           }
         ]
        },
    ]
}