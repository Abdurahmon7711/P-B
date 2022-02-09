import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.dark,
    },
}));

const Feedbacke = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };




    return (
        <div>
            <div className="feedbacke">
                <div className="container">
                    <div className="feedbacke_body pt-4 ">
                        <div className="row mt-5 p-3 feedbek-title">
                            <div className="col-md-4">
                                <h1 className="why_me">WHY ME?</h1>
                                <span className="line_feed"></span>
                                <span className="long_line_feed"></span>
                                <span className="line_feed"></span>
                            </div>
                            <div className="col-md-8">
                                <h1 className="why_me">CLIENT'S FEEDBACK</h1>
                                <span className="line_feed"></span>
                                <span className="long_line_feed"></span>
                                <span className="line_feed"></span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 p-4 acardion">
                                <div className={classes.root}>
                                    <Accordion className="acard" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary Mui-expanded
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className="collapse_title"   >Collapsible Group Item #1</Typography>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className="tess">
                                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acard" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography className="collapse_title" >Collapsible Group Item #2</Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className="tess">
                                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion className="acard" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                        >
                                            <Typography className="collapse_title">Collapsible Group Item #3</Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className="tess">
                                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                                vitae egestas augue. Duis vel est augue.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                </div>
                            </div>
                            <div className="col-md-8 p-4">

                                <div>

                                    <Slider {...settings}>
                                        <div className="border1 p-4">
                                            <p><i>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skatebo brunch. Food truck quinoa nesciunt laborum eiusmod tempor sunt aliqua put.</i></p>

                                            <h5><i>James Web Deweloper</i></h5>
                                        </div>
                                        <div className="border1 p-4">
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor br   truck quinoa nesciu tempor sunt aliqua put.</p>
                                            
                                            <h5><i>James Web Deweloper</i></h5>
                                        </div>
                                        <div className="border1 p-3">
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brun  nesciunt laborum eiusmod tempor sunt aliqua put.</p>
                                            
                                            <h5><i>James Web Deweloper</i></h5>
                                        </div>

                                    </Slider>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedbacke;