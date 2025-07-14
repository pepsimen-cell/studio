import { changelogs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";

export function ChangelogsView() {
  const getBadgeVariant = (
    type: string
  ): "default" | "secondary" | "destructive" | "outline" => {
    switch (type) {
      case "Added":
        return "default";
      case "Improved":
        return "secondary";
      case "Fixed":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">Changelogs</h1>
      <Separator />
      <Accordion type="single" collapsible defaultValue={changelogs[0]?.id}>
        {changelogs.map((log) => (
          <AccordionItem key={log.id} value={log.id}>
            <AccordionTrigger className="text-lg">
              <div className="flex items-center gap-4">
                <span>{log.version}</span>
                <span className="text-sm text-muted-foreground">{log.date}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-4">
                {log.changes.map((change, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Badge variant={getBadgeVariant(change.type)} className="mt-1">
                      {change.type}
                    </Badge>
                    <span className="text-foreground/80">
                      {change.description}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
