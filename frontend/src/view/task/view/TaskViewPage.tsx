import { Card } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/task/view/taskViewActions';
import selectors from 'src/modules/task/view/taskViewSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import TaskView from 'src/view/task/view/TaskView';
import TaskViewToolbar from 'src/view/task/view/TaskViewToolbar';
import TaskInstanceListTable from 'src/view/taskInstance/list/TaskInstanceListTable';

function TaskPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Card>
        <MDBox py={3} px={3}>
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDBox
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <MDTypography variant="h4">
                {i18n('entities.task.view.title')}
              </MDTypography>
              {record && (
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="bold"
                  ml={3}
                >
                  {`# ${record?.reference}`}
                </MDTypography>
              )}
            </MDBox>
            <TaskViewToolbar match={match} />
          </MDBox>

          <TaskView loading={loading} record={record} />
          <MDBox mt={5}>
            <MDTypography variant="h4">
              {i18n('entities.task.instances')}
            </MDTypography>
            <TaskInstanceListTable task={match.params.id} />
          </MDBox>
        </MDBox>
      </Card>
    </>
  );
}

export default TaskPage;
