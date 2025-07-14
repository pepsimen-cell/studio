import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

export function StatusView() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Online":
        return "bg-[hsl(var(--status-online))]";
      case "Maintenance":
        return "bg-[hsl(var(--status-maintenance))]";
      case "Offline":
        return "bg-[hsl(var(--status-offline))]";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Service Status</h1>
      <Separator />
      <Card>
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between"
              >
                <span className="text-foreground/90">{service.name}</span>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "h-3 w-3 rounded-full animate-pulse",
                      getStatusColor(service.status)
                    )}
                  />
                  <span>{service.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
