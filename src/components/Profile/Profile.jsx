import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  onCardClick,
  onAddClick,
  onProfileChange,
  onLogout,
}) {
  return (
    <section className="profile">
      <SideBar onProfileChange={onProfileChange} onLogout={onLogout} />
      <ClothesSection
        onCardClick={onCardClick}
        onAddClick={onAddClick}
        clothingItems={clothingItems}
      />
    </section>
  );
}
