import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImgGallery } from "../components"


export const NoteView = () => {
  return (
    
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >28 de agosto, 2024</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2}}>
                <SaveOutlined sx={{ fontSize:30, mr:1 }}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
            type="text"
            variante='filled'
            fullWidth
            placeholder="Ingresa un titulo"
            label="Título"
            sx= {{border: 'none', mb:1}}
            />
            <TextField
            type="text"
            variante='filled'
            fullWidth
            multiline
            placeholder="¿Que sucedió en el día de hoy?"
            minRows={5}
            />
        </Grid>

        <ImgGallery />
    </Grid>
  )
}
