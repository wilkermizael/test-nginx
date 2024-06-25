import { ImageList, Stack, ImageListItem, Typography, ImageListItemBar } from "@mui/material"

export const MuiImageList = ()=>{
    type ItemData = {
    img: string;
    title: string;
}
    const itemData: ItemData[]= [
    {
        img:'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nado'
    },
    {
        img:'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Ceu Nublado'
    },
    {
        img:'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Girassol'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1664304254005-ec69da37fe7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nadador'
    },
    {
        img:'https://images.unsplash.com/photo-1650477150980-fa9e3b3124b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxSQVBEZFg1eUlqNHx8ZW58MHx8fHx8',
        title: 'Camera'
    },
    {
        img:'https://images.unsplash.com/photo-1617243876873-6cea4ea0b4eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa de praia'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nado'
    },
    {
        img:'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Ceu Nublado'
    },
    {
        img:'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Girassol'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1664304254005-ec69da37fe7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nadador'
    },
    {
        img:'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa'
    },
    {
        img:'https://images.unsplash.com/photo-1617243876873-6cea4ea0b4eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa de praia'
    }
]
    const itemData2: ItemData[]= [
    {
        img:'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nado'
    },
    {
        img:'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Ceu Nublado'
    },
    {
        img:'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Girassol'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1664304254005-ec69da37fe7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nadador'
    },
    {
        img:'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa'
    },
    {
        img:'https://images.unsplash.com/photo-1617243876873-6cea4ea0b4eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa de praia'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nado'
    },
    {
        img:'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Ceu Nublado'
    },
    {
        img:'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Girassol'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1664304254005-ec69da37fe7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nadador'
    },
    {
        img:'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa'
    },
    {
        img:'https://images.unsplash.com/photo-1617243876873-6cea4ea0b4eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Casa de praia'
    }
]
    return(
        <Stack spacing={4}>
        <ImageList sx={{width:'500px', height:'450px'}}
        cols={3}
        rowHeight={164}
        >
            {itemData.map(item =>(
                <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=1920&h=1750&fit=crop`} alt="imagem do site unsplash" loading="lazy"/>
                    <ImageListItemBar title={item.title}/>
                </ImageListItem>
            ))}
        </ImageList>

        <ImageList variant={"woven"} sx={{width:'500px', height:'450px'}}
        cols={3}
        rowHeight={164}
        gap={8}
        >
            {itemData2.map(item =>(
                <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt="imagem do site unsplash" loading="lazy"/>
                    <Typography>{item.title}</Typography>
                </ImageListItem>
            ))}
        </ImageList>
        </Stack>
    )

}