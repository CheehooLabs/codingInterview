import Link from "next/link";
import { TypographyH4, TypographyP } from "./typography";
import { Button } from "./ui/button";

interface PageProps {
  title: string;
  description?: string;
  downloadLink?: string;
  children: React.ReactNode;
}

const PageComp: React.FC<PageProps> = ({
  title,
  description,
  downloadLink,
  children,
}) => {
  return (
    <div className="p-8">
      <TypographyH4>{title}</TypographyH4>
      {description && (
        <TypographyP>
          {description}
          {downloadLink && (
            <Button style={{ display: "inline" }} className="mx-5" variant="outline">
              <Link target="_blank" href={downloadLink}>
                Download
              </Link>
            </Button>
          )}
        </TypographyP>
      )}

      <div className="pt-8">{children}</div>
    </div>
  );
};

export default PageComp;
