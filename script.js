//models are here: https://github.com/mehlko/model/

const logLevel = 1;
const {
  Button,
  Alert,
  Autocomplete,
  TextField,
  createFilterOptions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
  Box,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
  Grid,
  Item,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  TabPanel,
  TabContext,
  TabList,
} = MaterialUI;
/** Represent a production line. This is the root component. */
class ProductionLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelToAnalyze: '',
    };
  }
  async loadUrlToStore(myStore, url) {
    var resultString = await (await fetch(url)).text();

    this.parser.parse(resultString, (error, quad, prefixes) => {
      if (quad) {
        myStore.addQuad(quad);
      }
    });
  }

  analyze() {
    info('analyzing');
  }

  render() {
    return (
      <div>
        <Container maxWidth="md">
          <Typography variant="overline" gutterBottom>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                Resilience Analyzer
              </Grid>
              <Grid item xs={2}>
                v0.0.1-alpha
              </Grid>
              <Grid item xs={1}>
                <Link href="https://github.com/mehlko/model">Source</Link>
              </Grid>
              <Grid align="right" item xs={4}>
                Marco Ehl
              </Grid>
            </Grid>
          </Typography>
        </Container>
        <Container maxWidth="md">
          <Typography variant="h3">Resilience Analyzer</Typography>
          <Button
            variant="contained"
            onClick={() => this.analyze()}
            fullWidth
            color="success"
          >
            Analyze
          </Button>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<ProductionLine />, document.getElementById('container'));

function log(text) {
  console.log(text);
}
function info(text) {
  if (logLevel) {
    console.log(text);
  }
}
