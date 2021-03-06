import { Box, Flex, Image, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const CarsPage = () => {
  const data = [
    {
      id: 1,
      name: "Maruti Eeco STR W/O AC",
      type: "Manual . Petrol . 7 Seats",
      rating: "4.0 . 42k kms driven",
      price: "₹ 949",
      image:
        "https://zoomcar-assets.zoomcar.com/photographs/original/037f27ee7f7722dcd3b553269720f1873abc6bdf.JPG?1637329567",
    },
    {
      id: 2,
      name: "Honda WR-V",
      type: "Manual . Diesel . 5 Seats",
      rating: "4.0 . 38k kms driven",
      price: "₹ 1,538",
      image:
        "https://zoomcar-assets.zoomcar.com/photographs/original/db5c43a039a8ef663eb20d1a367d161f898226e9.JPG?1628514986",
    },
    {
      id: 3,
      name: "Tata Zest",
      type: "Manual . Petrol . 5 Seats",
      rating: "4.0 . 15k kms driven",
      price: "₹ 1,243",
      image:
        "https://zoomcar-assets.zoomcar.com/photographs/original/546e492e1a7eea0ec6c017a235367ff271da4111.JPG?1625028879",
    },
    {
      id: 4,
      name: "Maruti Eeco STR W/O AC",
      type: "Manual . Petrol . 7 Seats",
      rating: "4.0 . 5k kms driven",
      price: "₹ 1,145",
      image:
        "https://zoomcar-assets.zoomcar.com/photographs/original/037f27ee7f7722dcd3b553269720f1873abc6bdf.JPG?1637329567",
    },
  ];
  const navigate = useNavigate();

  const handleBook = () => {
    alert("Booking Confirmed 😊");
    navigate("/");
  };
  return (
    <Box>
      <Box w="60%" m="auto" p={3}>
        {data.map((elem) => {
          return (
            <Box mb={3}>
              <Flex
                key={elem.id}
                justifyContent="space-between"
                border="1px solid black"
                p={3}
              >
                <Box w="60%" p={4}>
                  <Box fontSize="large" fontWeight="bold">
                    {elem.name}
                  </Box>
                  <Box>{elem.type}</Box>
                  <Flex>
                    <Box mr={2} mt={1}>
                      <AiFillStar />
                    </Box>
                    <Box>{elem.rating}</Box>
                  </Flex>
                  <Box color="green" fontWeight="bold">
                    {elem.price}
                  </Box>
                  <Box mt={10}>
                    <Button bg="green" color="white" onClick={handleBook}>
                      Book Now
                    </Button>
                  </Box>
                </Box>
                <Box w="40%">
                  <Image src={elem.image} />
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
