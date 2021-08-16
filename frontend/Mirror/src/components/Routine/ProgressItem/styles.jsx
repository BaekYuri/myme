import styled from 'styled-components';
import CustomCard from '../CustomCard';
const Wrapper = styled(CustomCard)`
    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
    }
    .video-container iframe,
    .video-container object,
    .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .MuiTab-root{
        min-width:50px
    }
    .active-tab{
        color:#c2bdac;
    }
    .no-active-tab{
        color:#2b3856;
    }

    .content-typography{
        margin: 10px;
    }
    .progress-header{
        border-bottom: 2px solid #666666;
        padding-left: 20px;
        height:49px;
        line-height:49px;
    }
    .progress-footer{
        border-top: 2px solid #666666;
    }
    .progress-article{
        background-color:#050505;
    }
`;
export default Wrapper;