import { Card, CardBody } from "@nextui-org/react";

export const UserTwitterCard = () => {
  return (
    <div className="">
      <Card
        shadow="none"
        className="max-w-[200px] rounded-none  border-none bg-transparent"
      >
        <CardBody className="px-5 py-0 rounded-none">
          <p className="mb-2">Profile</p>
          <p className="mb-2">Dashboard</p>
          <p className="mb-2 bg-red-300 p-1 rounded text-center">Logout</p>
        </CardBody>
      </Card>
    </div>
  );
};
