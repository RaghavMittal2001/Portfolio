export default{
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [   
        {   
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {   
            name: 'comapny',
            title: 'Company',
            type: 'string'
        },
    
        {   
            name: 'feedback',
            title: 'Feedback',
            type: 'string'

        }, 
    
        {   
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }  
    ]
}
            
   
