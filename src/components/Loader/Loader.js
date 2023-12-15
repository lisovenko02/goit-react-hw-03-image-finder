import { ProgressBar } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{
                display: 'block',
                margin: 'auto',
                
            }}
            wrapperClass="progress-bar-wrapper"
            borderColor = 'black'
            barColor = 'yellow'
            
        />
    )
}