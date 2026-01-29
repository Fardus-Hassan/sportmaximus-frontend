import { TrendingIcon } from "@/components/Icons";

export interface TrendingService {
  id: string;
  serviceName: string;
  providerName: string;
}

export interface TrendingServicesProps {
  services: TrendingService[];
  className?: string;
}

export default function TrendingServicesCard({
  services,
  className = "",
}: TrendingServicesProps) {
  return (
    <div
      className={`bg-white rounded-xl p-5 ${className}`}
      style={{
        boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.05)",
      }}>
      {/* Header */}
      <div className="bg-primary/10 rounded-full px-4 py-2 mb-5 flex items-center justify-center gap-2 w-full">
        <TrendingIcon width={18} height={18} fill="#E32750" />
        <h3 className="text-sm font-bold text-center text-primary">
          Trending This Week
        </h3>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="space-y-1">
            <div className="flex items-center gap-1.5">
              <TrendingIcon width={14} height={14} fill="#FFA500" />
              <span className="text-xs text-text-primary/60">Trending</span>
            </div>
            <h4 className="text-sm font-bold text-text-primary">
              {service.serviceName}
            </h4>
            <p className="text-xs text-text-primary/60">
              {service.providerName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
