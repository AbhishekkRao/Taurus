import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { Card, Typography, CardHeader, CardBody, CardFooter, Tooltip } from "@material-tailwind/react";

const cardInfo = [
    {
        id: '1',
        name: 'Abhishek Komarraju',
        img: '/profile/Abhishek.png',
        linkedin: 'https://www.linkedin.com/in/AbhishekkRao/',
        github: 'https://github.com/AbhishekkRao',
        email: 'mailto:abhishek.komarraju@gmail.com',
    },
    {
        id: '2',
        name: 'Aibhinav Upadhyay',
        img: '/profile/Aibhinav.png',
        linkedin: 'https://www.linkedin.com/in/aibhinav-upadhyay-69b872175/',
        github: 'https://github.com/Abhixsmasher',
        email: 'mailto:abhixsmasher@gmail.com',
    },
    {
        id: '3',
        name: 'Mahika Kushwaha',
        img: '/profile/Mahika.png',
        linkedin: 'https://www.linkedin.com/in/mahikakushwaha/',
        github: 'https://github.com/xx-Mahika-xx',
        email: 'mailto:mahika.ug20@nsut.ac.in',
    },
    {
        id: '4',
        name: 'Shivang Patel',
        img: '/profile/Shivang.png',
        linkedin: 'https://www.linkedin.com/in/shivang-patel-5425ba22b/',
        github: 'https://github.com/Shivang-Patel',
        email: 'mailto:shivang.patel2303@gmail.com',
    },
    {
        id: '5',
        name: 'Vasu Pal',
        img: '/profile/Vasu.png',
        linkedin: 'https://www.linkedin.com/in/vasu-pal-300448203/',
        github: 'https://github.com/Vasu1712/',
        email: 'mailto:vasu.pal.ug20@nsut.ac.in',
    },
]

const About = () => {
    return (
        <LoggedInContainer curActiveScreen="about">
            <div className="flex flex-wrap gap-5 place-content-center">
                {cardInfo.map((info) => (
                    <Card className="w-1/4 h-96 m-2" key={info.name}>
                        <CardHeader floated={false}>
                            <img src={info.img} alt="profile" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-1">
                                {info.name}
                            </Typography>
                            <Typography color="blue" className="font-medium text-sm mt-2" textGradient>
                                Netaji Subhas University of Technology
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-1">
                            <Tooltip content="LinkedIn">
                                <a href={info.linkedin}>
                                    <Icon icon="mdi:linkedin" color="#ee4774" width="30" height="30" />
                                </a>
                            </Tooltip>
                            <Tooltip content="Github">
                                <a href={info.github}>
                                    <Icon icon="mdi:github" color="#ee4774" width="30" height="30" />
                                </a>
                            </Tooltip>
                            <Tooltip content="E-mail">
                                <a href={info.email}>
                                    <Icon icon="dashicons:email" color="#ee4774" width="30" height="30" />
                                </a>
                            </Tooltip>
                        </CardFooter>
                    </Card>

                ))}
            </div>
        </LoggedInContainer>
    );
};

export default About;