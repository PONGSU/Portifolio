import React from 'react';
import { styled } from '@mui/material/styles';
import { Zoom } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { techList } from './techlist';
import { StyledTechsLogos } from './style';

const TechsLogos = () => {
  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      enterTouchDelay={0}
      arrow
      TransitionComponent={Zoom}
      {...props}
      classes={{ popper: className }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#31CB00',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      color: '#31CB00',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
  return (
    <StyledTechsLogos>
      {techList.map((tech) => (
        <CustomTooltip title={tech.title}>
          <div style={{ padding: tech.padding }} className={'tech-box ' + tech.text}>
            <img src={tech.img} alt={tech.title + ' logo'} />
            {tech.text && <h4>{tech.text}</h4>}
          </div>
        </CustomTooltip>
      ))}
    </StyledTechsLogos>
  );
};

export default TechsLogos;
