import Grid from '@mui/material/Grid';

// Widgets
import TasksByMonth from 'src/view/widgets/TasksByMonth';

function TasksByMonthPage(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TasksByMonth />
        </Grid>
      </Grid>
    </>
  );
}

export default TasksByMonthPage;
