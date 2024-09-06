    import React from 'react';
    import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

    interface Props extends React.PropsWithChildren {
    percentage: number;
    }

    const CircularProgressbarComponent: React.FC<Props> = ({ percentage, children }) => {
    return (
        <CircularProgressbarWithChildren
        value={percentage}
        maxValue={100}
        text={`${percentage}%`}
        styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
        })}
        >
        {children}
        </CircularProgressbarWithChildren>
    );
    };

    export default CircularProgressbarComponent;