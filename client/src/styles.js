import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(64,64,64, 1)',
  },
  image: {
    marginLeft: '15px',
    width: '80px', // Increase the width value to make the image wider
    height: 'auto' // Adjust the height value accordingly to maintain the aspect ratio
  },
}));
