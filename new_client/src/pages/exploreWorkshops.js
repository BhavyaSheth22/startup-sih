import { Grid,Heading, VStack, StackDivider } from "@chakra-ui/react";
import Api from "../utils/Api/Api.js";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";
import Card from "../components/workshopCards";
import { useEffect, useState } from "react";
import { responseErrorHandler } from "../utils/Api/Api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loader";

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const enrol = () => {
		toast("Enrolled successfully");
	};

	useEffect(() => {
		const init = async () => {
			const toastElement = toast.loading("Fetching All Campaigns");
			try {
				const response = await Api.workshop.getAllWorkshops();
				console.log(response.data.data);
        setWorkshops(response.data.data);
		
			
				toast.update(toastElement, {
					render: "All Workshops Fetched",
					type: "success",
					isLoading: false,
					autoClose: true,
				});
			} catch (error) {
				responseErrorHandler(error, toastElement);
			}
			setIsLoading(false);
		};
		return init();
	}, []);
    return (
      <div>
        <Navbar />
        <Grid
          gridTemplateColumns="22vw auto"
          columnGap="2rem"
          marginLeft="1rem"
          marginRight="1rem"
        >
        <RightSidebar/>
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        ><Heading>Explore Workshops</Heading>

        <Grid
        templateColumns='repeat(3, 1fr)' gap={3}
        >
            {workshops.map((workshop)=>(
            <Card id={workshop._id} title={workshop.title} links={workshop.links} description={workshop.description} organizer={workshop.organizer} theme={workshop.theme}  contact={workshop.contact} imgpath={workshop.imgpath}/>
        ))}
        </Grid>
        </VStack>
        
        </Grid>
      </div>
    );
  };
  
  export default Workshop;
