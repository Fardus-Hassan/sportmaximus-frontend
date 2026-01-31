import PaginationFooter from "@/components/shared/PaginationFooter";
import { ReviewCard } from "./ReviewCard";
import { SenderReviewCard } from "./SendReviewCard";

export default function ProductReview() {
  return (
    <div className="space-y-4 w-full">
      <h1 className="text-2xl font-medium">
        {" "}
        Product Reviews{" "}
        <span className="text-xl text-gray-600">(156 Reviews)</span>
      </h1>
      <div className="space-y-6">
        <SenderReviewCard
          userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
          userName="Sara Chen"
          userEmail="sophiaclark003@gmail.com"
          onSubmit={(rating, review) => {
            console.log("Rating:", rating);
            console.log("Review:", review);
          }}
        />

        <ReviewCard
          userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
          userName="Sophia Clark"
          userEmail="sophiaclark003@gmail.com"
          rating={4}
          reviewText="Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process."
          onDelete={() => console.log("Delete review")}
        />

        <PaginationFooter
          currentPage={1}
          totalPages={16}
          totalItems={1450}
          itemsPerPageOptions={["10", "11", "25", "50"]}
          defaultItemsPerPage="11"
          onPageChange={(page) => console.log("Page changed to:", page)}
          onItemsPerPageChange={(items) =>
            console.log("Items per page changed to:", items)
          }
        />
      </div>
    </div>
  );
}
