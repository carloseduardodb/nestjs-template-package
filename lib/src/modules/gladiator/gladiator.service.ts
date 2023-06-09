import { Injectable, Inject } from "@nestjs/common";
import { GladiatorOptionsDto } from "../../dtos/gladiator-options.dto";

@Injectable()
export class GladiatorService {
  constructor(
    @Inject("GLADIATOR_OPTIONS")
    private gladiatorOptions: GladiatorOptionsDto
  ) {}

  async IsUsingSword(): Promise<boolean> {
    return this.gladiatorOptions.weapon == "Sword";
  }
}
