import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PhotoItems = () => {
  return (
    <Card sx={{ width: 300, marginLeft: 5, borderRadius: 3 }}>
      <CardMedia
        sx={{ height: 200 }}
        component="img"
        alt="green iguana"
        image="https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg?cs=srgb&dl=pexels-sam-lg-735174.jpg&fm=jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PhotoItems;
